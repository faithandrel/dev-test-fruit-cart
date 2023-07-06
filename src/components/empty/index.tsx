export const Empty = () => (
  <div className="flex items-center justify-center empty">
    <div className="text-center">
      <div className="flex justify-center mb-2">
        <img src={require('../../assets/empty.png')} />
      </div>
      <p>No products have been added.</p>
    </div>
  </div>
);
