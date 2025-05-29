import React, { useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import CompareTable from "../components/CompareTable";
import ComparisonCharts from "../components/ComparisonCharts";
import LanguageComparison from "../components/LanguageComparison"; // Новый компонент

const ComparePage = () => {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Функция для получения статистики по языкам
  const fetchUserLanguages = async (username) => {
    try {
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      const languageStats = {};

      // Собираем данные о языках
      for (const repo of reposResponse.data) {
        if (repo.language) {
          languageStats[repo.language] =
            (languageStats[repo.language] || 0) + 1;
        }
      }

      return languageStats;
    } catch (err) {
      console.error(`Error fetching languages for ${username}:`, err);
      return {};
    }
  };

  const fetchUsers = async () => {
    if (!username1 || !username2) return;

    setLoading(true);
    setError("");

    try {
      // Запрашиваем базовую информацию о пользователях
      const [userRes1, userRes2] = await Promise.all([
        axios.get(`https://api.github.com/users/${username1}`),
        axios.get(`https://api.github.com/users/${username2}`),
      ]);

      // Запрашиваем статистику по языкам для каждого пользователя
      const [languages1, languages2] = await Promise.all([
        fetchUserLanguages(username1),
        fetchUserLanguages(username2),
      ]);

      // Объединяем данные
      const user1Data = { ...userRes1.data, languages: languages1 };
      const user2Data = { ...userRes2.data, languages: languages2 };

      setUser1(user1Data);
      setUser2(user2Data);
    } catch (err) {
      setError("Один или оба пользователя не найдены");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Сравнение GitHub профилей</h1>
      <div className='compare-inputs'>
        <input
          type='text'
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
          placeholder='Первый GitHub пользователь'
        />
        <span>vs</span>
        <input
          type='text'
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
          placeholder='Второй GitHub пользователь'
        />
        <button onClick={fetchUsers} disabled={loading}>
          {loading ? "Загрузка..." : "Сравнить"}
        </button>
      </div>

      {error && <p className='error'>{error}</p>}

      {user1 && user2 && (
        <div className='compare-results'>
          <div className='users-container'>
            <UserCard user={user1} />
            <UserCard user={user2} />
          </div>

          <ComparisonCharts user1={user1} user2={user2} />

          <LanguageComparison user1={user1} user2={user2} />

          <CompareTable user1={user1} user2={user2} />
        </div>
      )}
    </div>
  );
};

export default ComparePage;
