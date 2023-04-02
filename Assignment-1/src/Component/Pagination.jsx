import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ onChange, page, total }) => {
    console.log("page", page);
    const previous = (
        <button
            style={{
                backgroundColor: "#e9be74",
                border: "1px solid white",
                borderRadius: "7px",
                fontWeight: "600",
                color: "#000000",
                fontSize: "70%",
                width: "sm",
                padding: "2px 6px"
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
            fontSize: "70%",
            fontWeight: "bold",
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
                backgroundColor: "#e9be74",
                border: "1px solid white",
                borderRadius: "7px",
                color: "#000000",
                fontWeight: "600",
                fontSize: "70%",
                width: "sm",
                padding: "2px 6px",
            }}
            disabled={page === Math.ceil(total / 5)}
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