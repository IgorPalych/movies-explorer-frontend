import { useMemo, useRef } from "react";

export function useIsSaved(filteredList, savedList) {
  const mongoId = useRef(null);

  const updatedList = useMemo(() => {
    return filteredList.map((filteredItem) => {
      const isSaved = savedList.some((savedItem) => {
        mongoId.current = savedItem._id;
        return savedItem.movieId === filteredItem.movieId
      })

      return isSaved
        ? (filteredItem = { ...filteredItem, saved: true, _id: mongoId.current })
        : (filteredItem = { ...filteredItem, saved: false })
    });
  }, [filteredList, savedList]);

  return updatedList;
}