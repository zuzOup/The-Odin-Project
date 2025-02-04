function Shop({ prop }) {
  console.log(typeof prop);
  return (
    <div>
      shop
      {prop.map((x, i) => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}

export default Shop;
