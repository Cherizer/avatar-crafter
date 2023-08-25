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
    <div className="main-stuff">
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

        <div className="settings">
            <h1 className="main-title">
                Github Style Profile Picture Generator
            </h1>

            <button className="button generate-button" onClick={generateNewGrid}>
                Generate New
            </button>

            <button className="button download-button">
                <span className="material-symbols-outlined">download</span>
                Download
            </button>
        </div>
    </div>
  );
};

export default ProfilePictureGenerator;
