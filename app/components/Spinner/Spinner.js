import styles from './Spinner.module.css'

const circlesCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

export const Spinner = () => {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.spinner}>
                {circlesCount.map(circle => <div className={styles.circle} style={{ "--circle": `${circle}` }} />)}
            </div>
        </div>
    )
}