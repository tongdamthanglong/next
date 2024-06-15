export default function MealsExtra(props) {
  const { params } = props;
  console.log({ props });
  return (
    <>
      <h3>Hey this is {params.slug}</h3>
    </>
  );
}
