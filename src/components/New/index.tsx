import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const New = () => {
  let params = useParams();

  useEffect(() => {
    console.log(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      New <p>id: {params.id}</p>
    </div>
  );
};

export default New;
