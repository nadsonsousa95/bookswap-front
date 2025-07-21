import styles from "./ConfirmDialog.module.css";
import type { ConfirmDialogProps } from "../../types/ConfirmDialogProps";


export default function ConfirmDialog({ message, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button onClick={onConfirm} className={styles.confirm}>Sim</button>
          <button onClick={onCancel} className={styles.cancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}