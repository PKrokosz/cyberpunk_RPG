export const Profile = {
  async init(user, container) {
    container.innerHTML = `
      <div class="profile-header">USER: ${user}</div>
      <p>Profil w trakcie budowy...</p>
    `;
  }
};
