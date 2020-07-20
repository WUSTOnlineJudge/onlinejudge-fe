import React from "react";
import {
    createStyles, LinearProgress,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer, TableFooter,
    TableHead, TablePagination,
    TableRow,
    Theme,
    withStyles
} from "@material-ui/core";
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";




const useStyles = (theme: Theme) => createStyles({
})


class Problems extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    readonly state = {
        rows: [
            {id: 1001, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1002, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1003, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1004, title: "A+F Problem", submit: 135132, ac: 124125},
            {id: 1005, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1006, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1007, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1008, title: "A+F Problem", submit: 135132, ac: 124125},
            {id: 1009, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1010, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1011, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1012, title: "A+F Problem", submit: 135132, ac: 124125},
            {id: 1013, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1014, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1015, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1016, title: "A+F Problem", submit: 135132, ac: 124125},
            {id: 1017, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1018, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1019, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1020, title: "A+F Problem", submit: 135132, ac: 124125},
            {id: 1021, title: "A+B Problem", submit: 1000, ac: 832},
            {id: 1022, title: "A+C Problem", submit: 1325, ac: 324},
            {id: 1023, title: "A+D Problem", submit: 1235, ac: 235},
            {id: 1024, title: "A+F Problem", submit: 135132, ac: 124125},
        ],
        rowsPerPage: 10,
        page: 0
    }

    handleChangePage(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) {
        this.setState({page: newPage});
    };

    handleChangeRowsPerPage(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        this.setState({rowsPerPage: parseInt(event.target.value, 10)});
        this.setState({page: 0});
    };

    render() {
        const {classes} = this.props;
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Ratio</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows
                            .slice(this.state.page * this.state.rowsPerPage,
                                (this.state.page + 1) * this.state.rowsPerPage)
                            .map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.submit}</TableCell>
                                <TableCell align="right">2020-03-12</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 20, 30]}
                                colSpan={4}
                                count={this.state.rows.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                labelRowsPerPage={"行数"}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
                <LinearProgress/>
            </TableContainer>
        );
    }
}

export default withStyles(useStyles)(Problems);
