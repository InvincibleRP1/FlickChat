import Mockman from 'mockman-js';
import { TopNavigation } from '../components/navbar/navbar';

export const APITest = () => {
  return (
    <div>
      <TopNavigation/>
      <div className="test-area">
        <Mockman />
      </div>
    </div>
  );
};
