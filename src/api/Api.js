export const UserAPI = async (page = 1, userId) => {
  // Gets all positions from Api...
  const urlPosition =
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
  const getPosition = await fetch(urlPosition);
  const positionJSON = await getPosition.json();
  const positions = positionJSON.positions;

  // Gets all users from Api...
  const urlUsers = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`;
  const getUsers = await fetch(urlUsers);
  const usersJSON = await getUsers.json();

  const { users, total_pages } = usersJSON;

  //Gets user for the site header from Api
  const urlUserHeader = `https://frontend-test-assignment-api.abz.agency/api/v1/users/${userId}`;
  const getUserHeader = await fetch(urlUserHeader);
  const userHeaderJSON = await getUserHeader.json();
  const userHeader = userHeaderJSON.user;
  return {
    positions,
    users,
    userHeader,
    total_pages,
  };
};

//Get token for user and registration request
export const UserAPIRequest = async (name, email, phone, selected) => {
  //Token for user registration
  const tokenUrl =
    'https://frontend-test-assignment-api.abz.agency/api/v1/token';
  //User registration url
  const userPostUrl =
    'https://frontend-test-assignment-api.abz.agency/api/v1/users';

  //Get token for user registration
  const getToken = await fetch(tokenUrl);
  const tokenJSON = await getToken.json();
  const userToken = tokenJSON.token;

  //User registration request
  const formData = new FormData();
  //file from input type='file'
  const fileField = document.querySelector("input[type='file']");
  formData.append('position_id', selected);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', fileField.files[0]);

  const header = {
    method: 'POST',
    body: formData,
    headers: {
      Token: userToken,
    },
  };
  try {
    const userRegistr = await fetch(userPostUrl, header);
    const userJSON = await userRegistr.json();
    const user = await userJSON;
    const urlUsers = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`;
    const getUsers = await fetch(urlUsers);
    const usersJSON = await getUsers.json();
    const { users } = usersJSON;

    if (user.success) {
      // process success response
      let openModal = true;
      return { user, openModal, users };
    }
  } catch (error) {
    throw error;
  }
};
