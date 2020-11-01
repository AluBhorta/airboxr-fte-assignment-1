import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CircularProgress,
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import PageTemplate from "./PageTemplate";
import { AppContext } from "../AppState";
import { DataStore } from "../models";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    gridList: {},
    gridListTile: {
      cursor: "pointer"
    },
    title: {},
    img: {
      display: "block",
      width: "50%",
      margin: "auto",
      marginTop: "15%"
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    }
  })
);

const SelectSourcePage: React.FC = () => {
  const { dataStores, updateDataStores } = useContext(AppContext);
  const [favIdxs, setFavIdxs] = useState<number[]>([]);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (dataStores.length < 1) {
      updateDataStores();
    }
  }, []);

  const getImgUrl = (storeName: string) => {
    return `/img/${storeName.toLowerCase().split(" ").join("-")}-logo.png`;
  };

  const toggleFavIdx = (idx: number) => {
    if (favIdxs.indexOf(idx) === -1) {
      setFavIdxs([idx, ...favIdxs]);
    } else {
      const newIdxs = favIdxs.filter((i) => i !== idx);
      setFavIdxs(newIdxs);
    }
  };

  const handleTileClick = (storeName: string) => {
    history.push(`/select-table/${storeName}`);
  };

  const favSources = dataStores.filter((source: DataStore) =>
    favIdxs.includes(source.id)
  );
  const unfavSources = dataStores.filter(
    (source: DataStore) => !favIdxs.includes(source.id)
  );
  const sortedSources: DataStore[] = favSources.concat(unfavSources);

  return (
    <>
      <PageTemplate pageTitle="Select Source" showBackBtn>
        {dataStores.length < 1 ? (
          <Box className="text-center" marginTop="30px">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <div>
              <p>
                Below is a list of sources you have connected. Please choose the
                data source that you'd like to import data from.
              </p>
            </div>

            <div className={classes.root}>
              <GridList className={classes.gridList} cols={2}>
                {sortedSources.map((store: DataStore) => (
                  <GridListTile className={classes.gridListTile} key={store.id}>
                    <div onClick={() => handleTileClick(store.name)}>
                      <img
                        className={classes.img}
                        src={getImgUrl(store.name)}
                        alt={store.name}
                      />
                    </div>
                    <GridListTileBar
                      title={store.name}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title
                      }}
                      actionIcon={
                        <IconButton
                          onClick={() => toggleFavIdx(store.id)}
                          aria-label={`star ${store.name}`}
                        >
                          {favIdxs.includes(store.id) ? (
                            <FavoriteIcon className={classes.title} />
                          ) : (
                            <FavoriteBorderIcon className={classes.title} />
                          )}
                        </IconButton>
                      }
                      titlePosition="bottom"
                      actionPosition="right"
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </>
        )}
      </PageTemplate>
    </>
  );
};

export default SelectSourcePage;
