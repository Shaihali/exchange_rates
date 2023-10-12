import loading from './loading.module.css';

export function Loading() {
  return (
    <div className={loading.box}>
      <div className={`${loading.dot} ${loading.dot1}`}>.</div>
      <div className={`${loading.dot} ${loading.dot2}`}>.</div>
      <div className={`${loading.dot} ${loading.dot3}`}>.</div>
    </div>
  )
}