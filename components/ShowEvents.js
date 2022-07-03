import React, { useEffect } from 'react';
import {Text, StyleSheet} from 'react-native';

export const ShowEvents = ({eves, date}) => {
  useEffect(() => {
    console.log("EVES:", eves)
  }, [eves])
  return (
    <>
      {
       eves && eves[date] ? [...eves[date]].map((eve, i) => {
            console.log(eves, eves[date])
            return <Text key={i} style={styles.no}>{eve}</Text>;
        }):
        <Text style={styles.no}>No events</Text>
      }
    </>
  );
};

const styles = StyleSheet.create({
    no: {
        color: "black"
    }
})