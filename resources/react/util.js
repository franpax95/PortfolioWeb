export const nl2br = (str) => str.split("\n").map((item, key) => (
    <React.Fragment key={key}>{item}<br/></React.Fragment>
));