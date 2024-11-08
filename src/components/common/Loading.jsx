import React from 'react';
import { Hearts } from 'react-loader-spinner';

function Loading() {
  return (
    <div style={styles.container}>
      <Hearts
        height="8rem"
        width="8rem"
        color="#5850fe"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    position: 'fixed', // 화면에 고정
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 9999,
  },
};

export default Loading;
