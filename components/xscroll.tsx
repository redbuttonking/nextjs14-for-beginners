'use client';
import React, { useRef } from 'react';
import styles from '../styles/xscroll.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

export default function Xscroll({ content }) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 600;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 600;
    }
  };

  return (
    <div className={styles.scrollWrapper}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        <FontAwesomeIcon icon={faCircleLeft} size="2xl" />
      </button>
      <div className={styles.scrollContainer} ref={scrollContainerRef} onWheel={handleWheel}>
        {content}
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}>
        <FontAwesomeIcon icon={faCircleRight} size="2xl" />
      </button>
    </div>
  );
}
