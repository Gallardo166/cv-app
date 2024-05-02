export default function Document({ data }) {
  return (
    <div className="document">
      <h1>{data.fullName}</h1>
      <h3>{data.phoneNumber}</h3>
      <h3>{data.email}</h3>
      {data.linkedIn ? <h3>{data.linkedIn}</h3> : null}
      {data.gitHub ? <h3>{data.gitHub}</h3> : null}
    </div>
  )
}