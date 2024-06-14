import { ClipLoader } from 'react-spinners';

interface LoadingProps {
  isLoading: boolean;
}

function Loading({ isLoading }: LoadingProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ClipLoader color='#484283' loading={isLoading} size={100} />
    </div>
  );
}

export default Loading;
