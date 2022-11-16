const MyExtraComponent: React.FC = () => {
  const stuff = [1, 2, 3, 4];

  return (
    <div>
      <article>
        {stuff.map((x) => {
          return <p key={x}>{x}</p>;
        })}
      </article>
    </div>
  );
};

export default MyExtraComponent;
