import React, { useEffect, useState } from "react";
import UserInterface from "../interfaces/UserDataInterfaces";
import axios from "axios";

const User: React.FC = () => {
  const [userData, setUserData] = useState<UserInterface[]>([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      //   console.log(res);

      if (res.status === 200) {
        setUserData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userData);

  return (
    <>
      <button onClick={getUserData}>Click ME Typescript</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Geo</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userData?.length > 0 &&
            userData?.map((item) => (
              <>
                <tr key={item?.id}>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.username}</td>
                  <td>{item?.email}</td>
                  <td>
                    <div>
                      <p>Street: {item?.address?.street}</p>
                      <p>Suite: {item?.address?.suite}</p>
                      <p>City: {item?.address?.city}</p>
                      <p>Zipcode: {item?.address?.zipcode}</p>
                    </div>
                  </td>
                  <td>
                    <div>
                        <p>Latitude: {item?.address?.geo?.lat}</p>
                        <p>Longitude: {item?.address?.geo?.lng}</p>
                    </div>
                  </td>
                  <td>{item?.phone}</td>
                  <td>{item?.website}</td>
                  <td>
                    <div>
                        <p>Name: {item?.company?.name}</p>
                        <p>Catch Phrase: {item?.company?.catchPhrase}</p>
                        <p>BS: {item?.company?.bs}</p>
                    </div>
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
