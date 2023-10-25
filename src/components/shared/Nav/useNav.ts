import { useRef, useState } from "react";

import { useDebouncedValue } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";

import { GetSearchResults } from "reactQuery/services";

const useNav = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [closeResults, setCloseResults] = useState(true);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setCollapsed(false);
    searchRef.current?.focus();
  };

  const [value, setValue] = useState("");

  const [debounced] = useDebouncedValue(value, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["search", debounced],
    queryFn: () => GetSearchResults({ searchParam: debounced as string }),
  });

  const searchResults = data?.data.rooms;

  return {
    searchResults,
    collapsed,
    closeResults,
    setCloseResults,
    handleFocus,
    isLoading,
    setValue,
    searchRef,
    value,
    debounced,
  };
};

export default useNav;
