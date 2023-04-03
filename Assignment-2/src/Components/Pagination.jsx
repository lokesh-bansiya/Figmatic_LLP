import { Box } from "@chakra-ui/react";

const Pagination = ({ onChange, page, total }) => {
    const previous = (
        <button
            style={{
                border: "1px solid black",
                borderRadius: "7px",
                fontWeight: "600",
                color: "black",
                fontSize: "100%",
                padding: "2px 10px"
            }}
            disabled={page === 1}
            onClick={() => onChange(-1)}
        >
            Prev
        </button>
    );

    const current = (
        <button style={{
            color: "darkred",
            fontSize: "120%",
            width: "sm",
            fontWeight: "bold",
            padding: "2px 6px"
        }}>
            {page}
        </button>
    );

    const next = (
        <button
            style={{
                border: "1px solid black",
                borderRadius: "7px",
                color: "black",
                fontWeight: "600",
                fontSize: "100%",
                padding: "2px 10px",
            }}
            disabled={page === Math.ceil(total / 12) || total === 0}
            onClick={() => onChange(1)}
        >
            Next
        </button>
    );

    return (
        <Box display="flex" justifyContent="center" padding="2%">
            <Box width="100%">
                {previous} {current} {next}
            </Box>
        </Box>
    );
};

export { Pagination };