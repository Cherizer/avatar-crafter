"use client"
import React, { useState } from 'react';
import generateRandomGrid from '../utils/gridGenerator';

const ProfilePictureGenerator: React.FC = () => {

  const initialGrid = generateRandomGrid();

  const [grid, setGrid] = useState<boolean[][]>(generateRandomGrid());

  const generateNewGrid = () => {
    setGrid(generateRandomGrid());
  };

  return (
    <div className="profile-picture">
        <div className="profile-picture">
            {initialGrid[0].map((_, columnIndex) => (
            <div key={columnIndex} className="column">
                {initialGrid.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`cell ${row[columnIndex] ? 'active' : 'inactive'}`}
                />
                ))}
            </div>
            ))}
        </div>
        <button className="generate-button" onClick={generateNewGrid}>
            Generate New
        </button>
    </div>
  );
};

export default ProfilePictureGenerator;
