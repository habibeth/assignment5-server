import { USER_ROLE } from "../modules/user/user.constant";
import { User } from "../modules/user/user.model";


const adminUser = {
  name: 'Ahsan Habib',
  email: 'cse.habibdiu@gmail.com',
  password: 'admin123',
  phone: "1234567890",
  images: "https://res.cloudinary.com/dg3pfilyl/image/upload/v1727419215/Ahsan%20Habib.jpg",
  role: USER_ROLE.admin,
  address: "123 Main Street, City, Country",
  isDeleted: false,
};

const seedAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isAdminExits = await User.findOne({ role: USER_ROLE.admin, email: adminUser.email });

  if (!isAdminExits) {
    await User.create(adminUser);
  }
};

export default seedAdmin;
