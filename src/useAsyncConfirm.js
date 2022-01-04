import { useContext } from 'react';
import ConfirmContext from './ConfirmContext';

const useAsyncConfirm = () => {
  const confirm = useContext(ConfirmContext);
  return confirm;
};

export default useAsyncConfirm;
