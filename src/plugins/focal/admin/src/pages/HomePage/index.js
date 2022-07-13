/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import PropTypes from 'prop-types';
import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";
import Plus from "@strapi/icons/Plus";
import Picture from "@strapi/icons/Picture";
import { FocusItems } from "../../components/FocusItems";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Box } from "@strapi/design-system/Box";
import { Button } from "@strapi/design-system/Button";
import { Typography } from "@strapi/design-system/Typography";
import "./style.css";
import { Illo } from "../../components/Illo";
import { StrapiTable } from "../../components/StrapiTable";

const HomePage = () => {
  const startingFocus = { x: 0, y: 0 };
  const [focus, setFocus] = useState(startingFocus);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [img, setImg] = useState();
  const [files, setFiles] = useState();
  const [tables, setTables] = useState([]);
  // const table = [];
  const getData = async () => {
    try {
      await fetch("http://localhost:1337/focal/?populate=*", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          setTables(response);
          // table.push(response);
        });
    } catch (error) {}
  };
  useEffect(async () => {
    await getData();
  }, []);

  const handleData = async (event) => {
    const [image] = event.target.files;
    const file = event.target.files[0];
    image && setIsDataLoaded(true);
    image && setImg(URL.createObjectURL(image));
    file && setFiles(file);
  };
  return (
    <Layout>
      <BaseHeaderLayout
        title="Focal Point Plugins"
        subtitle="This plugin is made for identify focal points of images"
        as="h2"
      />
      <ContentLayout>
        {isDataLoaded ? (
          <FocusItems
            src={img}
            setFocus={setFocus}
            focus={focus}
            files={files}
          />
        ) : tables.length > 0 ? (
          <StrapiTable datas={tables} func={handleData} />
        ) : (
          <Box padding={8} background="neutral100">
            <EmptyStateLayout
              icon={<Illo />}
              content="You can start setting a focal point by uploading a photo."
              action={
                <input accept="image/*" type="file" onChange={handleData} />
              }
            />
          </Box>
        )}
      </ContentLayout>
    </Layout>
  );
};

export default memo(HomePage);
