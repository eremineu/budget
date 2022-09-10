import { useEffect, useState } from 'react';

const Index = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetch('http://localhost:3333/api')
      .then((res) => {
        return res.json();
      })
      .then((d) => setData(d.message));
  }, []);

  return <p>{data}</p>;
};

export default Index;
