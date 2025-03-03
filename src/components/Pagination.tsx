import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setActivepage } from "../store/mainSlice";

export default function BasicPagination() {
    const dispatch = useDispatch();
    const totalpages = useSelector(
        (state: RootState) => state.mainSlice.totalPages,
    );

    const activepage = useSelector(
        (state: RootState) => state.mainSlice.activepage,
    );

    function handleChange(event: any, value: number): void {
        dispatch(setActivepage(value));
    }

    return (
        <Stack
            spacing={2}
            className='pagination_container'
            style={{ margin: "auto", marginBottom: 50 }}
        >
            <Pagination
                count={totalpages}
                page={activepage}
                onChange={handleChange}
            />
        </Stack>
    );
}
