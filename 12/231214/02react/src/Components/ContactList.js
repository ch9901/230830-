import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  // const contactList = useSelector((state) => state.contactList);
  // console.log(contactList);

  const { contactList, keyword } = useSelector((state) => state);
  const [filterdList, setFilteredList] = useState([]);
  // const keyword = useSelector((state) => state.keyword);

  //keyword값, contactlist(추가되어도 바뀌어야하니까)이바뀌면 해라
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      //검색이 일어나지않는다면 원래 값 전달
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      {filterdList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
