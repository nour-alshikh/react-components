export default function User({userData}) {

    const {avatar_url , name , created_at , repos_url , html_url , public_repos} = userData

    const createdDate = new Date(created_at);


    return (
        <div className="border-2 rounded-lg p-4 m-6 flex flex-col justify-center items-center">
            <p className="text-center text-3xl font-bold">{name}</p>
            <img src={avatar_url} className="rounded-lg" alt="avatar" />

            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
            })} ${createdDate.getFullYear()}`}



           <a className="text-cyan-700 font-semibold text-2xl" target="_blank" href={html_url}>URL</a>
           <p className="text-cyan-700 font-semibold text-2xl" >{public_repos}</p>
           <a className="text-cyan-700 font-semibold text-2xl" target="_blank" href={repos_url}>Repos</a>
        </div>
    )
}