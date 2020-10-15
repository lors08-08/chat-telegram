import React, { useEffect } from "react";
import App from "./App";
import SkeletonLoading from "./Components/LoadingSkeleton/SkeletonLoading";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts, loadMyId } from "./redux/actions";

function Root() {
  const dispatch = useDispatch();
  const loadingContacts = useSelector((state) => state.contacts.loading);
  const loadingMyId = useSelector((state) => state.profile.loading);

  useEffect(() => {
    //получаем контакты
    dispatch(loadContacts());
    //получаем профиль
    dispatch(loadMyId());
  }, [dispatch]);

  return loadingContacts || loadingMyId ? <SkeletonLoading /> : <App />;
}

export default Root;
