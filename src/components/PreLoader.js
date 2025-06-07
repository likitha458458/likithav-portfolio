import React from 'react';

const PreLoader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  spinner: {
    width: 60,
    height: 60,
    border: '8px solid #ddd',
    borderTop: '8px solid #4f46e5',  // Indigo-600 color
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

// Add keyframes for spinner animation (you need to add this in CSS)
export default PreLoader;
