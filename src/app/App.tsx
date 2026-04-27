import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.h1}>cursor-test</h1>

        <Card>
          <p className={styles.p}>
            この画面は Storybook ではなく Vite アプリの確認用です。
          </p>
          <div className={styles.row}>
            <Button variant="primary">Primary</Button>
            <Button variant="subtle">Subtle</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
