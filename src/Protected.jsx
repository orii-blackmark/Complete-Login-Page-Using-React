import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Protected = (props) => {
  const navigate = useNavigate();
  const { Component } = props;
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      localStorage.setItem("loginStatus", "please login to view dashboard!");
      navigate("/", { replace: true });
    }
  }, [navigate]);

  return <Component />;
};

Protected.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Protected;
