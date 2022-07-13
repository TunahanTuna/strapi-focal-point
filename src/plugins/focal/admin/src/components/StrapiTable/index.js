import {
  Table,
  Thead,
  Tbody,
  TFooter,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import { Box } from "@strapi/design-system/Box";
import Plus from "@strapi/icons/Plus";
import Pencil from "@strapi/icons/Pencil";
import Trash from "@strapi/icons/Trash";
import { Typography } from "@strapi/design-system/Typography";
import { Avatar, AvatarGroup } from "@strapi/design-system/Avatar";
import { Flex } from "@strapi/design-system/Flex";
import { IconButton, IconButtonGroup } from "@strapi/design-system/IconButton";

import React, { useState } from "react";

export const StrapiTable = ({
  datas,
  func,
  setDatas,
  setImg,
  setIsUpdate,
  setLoadCheck,
  setDataId,
}) => {
  const [dataState, setDataState] = useState(datas);

  return (
    <Box padding={8} background="neutral100">
      <Table
        footer={
          <TFooter icon={<Plus />}>
            <input accept="image/*" type="file" onChange={func} />
          </TFooter>
        }
      >
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">File</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Focal X</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Focal Y</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Actions</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {datas.map((data) => (
            <Tr key={data.id}>
              <Td>
                <Typography textColor="neutral800">
                  {data && data.id && data.id}
                </Typography>
              </Td>
              <Td>
                <Avatar
                  src={data && data.file && data.file.url && data.file.url}
                  alt={data && data.file && data.file.name && data.file.name}
                />
              </Td>
              <Td>
                <Typography textColor="neutral800">{data.focal_x}</Typography>
              </Td>
              <Td>
                <Typography textColor="neutral800">{data.focal_y}</Typography>
              </Td>
              <Td>
                <Flex>
                  <IconButton
                    onClick={() => {
                      setLoadCheck(true);
                      setImg(`http://localhost:1337${data.file.url}`);
                      setIsUpdate(true);
                      setDataId(data.id);
                    }}
                    label="Edit"
                    noBorder
                    icon={<Pencil />}
                  />
                  <Box paddingLeft={1}>
                    <IconButton
                      onClick={async () => {
                        await fetch(
                          `http://localhost:1337/focal/delete/${
                            data && data.id
                          }`,
                          {
                            method: "DELETE",
                          }
                        )
                          .then((res) => res.json())
                          .then(
                            setDatas((current) =>
                              current.filter((index) => {
                                return index.id !== data.id;
                              })
                            )
                          );
                      }}
                      label="Delete"
                      noBorder
                      icon={<Trash />}
                    />
                  </Box>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
