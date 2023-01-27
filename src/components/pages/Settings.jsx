import "../../style/pages/settings.css";
export default function Settings() {
  return (
    <div className="settings">
      <form className="settings">
        <input type="password" placeholder="Old Password" />
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="New Password" />
        <button>Save</button>
      </form>
    </div>
  );
}
