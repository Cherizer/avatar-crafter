"use client"
import React, { useState, useCallback, useRef } from 'react';
import generateRandomGrid from '../utils/gridGenerator';
import { toPng } from 'html-to-image';

const ProfilePictureGenerator: React.FC = () => {

  const initialGrid = generateRandomGrid();

  const ref = useRef<HTMLDivElement>(null)

  const [grid, setGrid] = useState<boolean[][]>(generateRandomGrid());


  const generateNewGrid = () => {
    setGrid(generateRandomGrid());
  };

  
  const handleDownload = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'avatar.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])


  return (
    <div className="main-stuff">
        <div className="profile-picture" id="avatar" ref={ref}>
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

            <button className="button download-button" onClick={handleDownload}>
                <span className="material-symbols-outlined">download</span>
                Download
            </button>
        </div>
    </div>
  );
};

export default ProfilePictureGenerator;
