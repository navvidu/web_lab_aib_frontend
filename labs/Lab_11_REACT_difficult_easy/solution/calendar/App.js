import React, { useState } from 'react';
import './App.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newNotes, setNewNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const totalDays = daysInMonth(date);
    const calendar = [];

    let day = 1;
    
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > totalDays) {
        week.push(<td key={`${i}-${j}`}></td>);
      } else {
        const currentDate = new Date(date.getFullYear(), date.getMonth(), day );
        week.push(
          <td key={`${i}-${j}`} onClick={() => handleDateClick(currentDate)}>
            <span>{day}</span>
            {notes[currentDate.toDateString()] && (
              <div>
                <p>{notes[currentDate.toDateString()]}</p>
              </div>
            )}
          </td>
        );
          day++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  const handleDateClick = (currentDate) => {
    setSelectedDate(currentDate);
    setNewNotes(notes[currentDate.toDateString()] || []);
  };

  const handleNoteChange = (e, currentDate) => {
    const updatedNotes = { ...notes, [currentDate.toDateString()]: e.target.value };
    setNotes(updatedNotes);
  };

  const handleNewNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedNotes = { ...notes };

    if (!updatedNotes[selectedDate.toDateString()]) {
      updatedNotes[selectedDate.toDateString()] = [];
    }

    updatedNotes[selectedDate.toDateString()].push(newNote);
    setNotes(updatedNotes);
    setNewNotes(updatedNotes[selectedDate.toDateString()]);
    setNewNote('');
  };

  const deleteNote = (index) => {
    const updatedNotes = { ...notes };
    updatedNotes[selectedDate.toDateString()].splice(index, 1);
    setNotes(updatedNotes);
    setNewNotes(updatedNotes[selectedDate.toDateString()]);
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    setDate(previousMonth);
    setSelectedDate(null);
    setNewNote('');
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    setDate(nextMonth);
    setSelectedDate(null);
    setNewNote('');
  };

  return (
    <div>
      <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
      <button onClick={goToPreviousMonth}>Предыдущий месяц</button>
      <button onClick={goToNextMonth}>Следующий месяц</button>
      {selectedDate && (
        <div>
          <h3>{selectedDate.getDate()} {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}</h3>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newNote}
              onChange={handleNewNoteChange}
              placeholder="Добавить заметку..."
            />
            <button type="submit">Ок</button>
          </form>
          {newNotes.map((note, index) => (
            <div key={index}>
              <p>{note}</p>
              <button onClick={() => deleteNote(index)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
        </thead>
        <tbody>{generateCalendar()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;