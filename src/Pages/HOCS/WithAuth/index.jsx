import React, {useEffect} from 'react';
import {useContextSelector} from "use-context-selector";
import AuthContext from "../../../Context/AuthContext";
import Router, {useRouter} from "next/router";

export default function WithAuthComponent({children}) {
  const isAuth = useContextSelector(AuthContext, v => v?.state?.isAuth);
  const router = useRouter();

  // TODO - profile deb adresga yozganda isAuth false turadi, (initialStateda)
  //  lekin saytni o'zida linklar orqali o'tganda to'g'ri o'tyapti

  useEffect(() => {
    if (!isAuth) {
      router.push("/");
    }
  }, [])

  return (
    <>
      {
        isAuth
        ? children
        : <div></div>
      }
    </>
  )
};
