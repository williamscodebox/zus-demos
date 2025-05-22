function printProps(Component: any) {
  return (props: any) => {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}

export default printProps;
