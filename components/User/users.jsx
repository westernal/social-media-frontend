import Link from "next/link";
import Image from "next/image";

const User = ({ users }) => {
  const host = "https://alinavidi.ir/";

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="profile-notif flex" key={user._id}>
          <Link href={`/profile/${user.username}/${user._id}`}>
            <a className="flex">
              {
                <Image
                  src={
                    !user.image.includes("userIcon")
                      ? host + user.image
                      : "/Images/user.svg"
                  }
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
              }
              <span id="userId">{user.username} </span>
              {user.verified && (
                <div className="verify">
                  <Image
                    src="/Images/verified (2).png"
                    alt="verify"
                    width={20}
                    height={20}
                  />
                </div>
              )}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;
