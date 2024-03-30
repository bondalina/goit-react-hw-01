import css from './TransactionHistory.module.css';
import clsx from 'clsx';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.trhead}>
          <th className={css.thhead}>Type</th>
          <th className={css.thhead}>Amount</th>
          <th className={css.thhead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className={css.tr} key={transaction.id}>
            <td className={clsx(css.td, css.tdCapital)}>{transaction.type}</td>
            <td className={css.td}>{transaction.amount}</td>
            <td className={css.td}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
