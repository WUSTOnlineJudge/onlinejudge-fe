import React from "react";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import {Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select} from "@material-ui/core";
import GridCompact from "../components/GridCompact";
import AceEditor from "react-ace";
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/theme-tomorrow'
import "ace-builds/src-noconflict/ext-language_tools"


const useStyles = (theme: Theme) => createStyles({
    problemTitle: {
        fontSize: 20,
        padding: "18px 20px",
        margin: 0
    },
    problemContainer: {
        margin: "0 30px",
        paddingBottom: 20
    },
    descTitle: {
        color: theme.palette.primary.main,
        fontFamily: "microsoft yahei"
    },
    descBody: {
        margin: "10px 15px"
    },
    paper: {
        fontSize: 16
    },
    sample: {
        margin: "10px 0 0 0",
        padding: "8px 15px",
        border: "1px solid #EBEEF5",
        borderRadius: "4px"
    },
    desc: {
        marginTop: 20
    },
    codePager: {
        padding: "20px"
    },
    languageSelect: {
        width: "150px"
    },
    codeAce: {
        width: "100%"
    },
    aceContainer: {
        border: "1px solid #EBEEF5"
    },
    submitBtn: {
        float: "right",
        marginTop: "10px"
    },
    codeHeader: {
        padding: "10px 0"
    },
    select: {
        width: "150px"
    },
    ftRight: {
        float: "right"
    }
})


interface State {
    problem: Problem
}

interface Sample{
    input: string,
    output: string
}

interface Problem {
    display_id: string,
    title: string
    description: string,
    hint: string,
    description_input: string,
    description_output: string,
    source: string,
    create_time: number,
    time_limit: number,
    memory_limit: number,
    samples: Array<Sample>
}


class ProblemDetail extends React.Component<any, State> {
    readonly state: Readonly<State> = {
        problem: {
            display_id: "",
            title: "A+B Problem",
            description: `请计算两个整数的和并输出结果。<br>注意不要有不必要的输出，比如\\n<br>请输入 a 和 b 的值，示例代码见隐藏部分。`,
            hint: "还需要hint吗?",
            description_input: "两个用空格分开的整数",
            description_output: "两数之和",
            source: "经典题目",
            create_time: 0,
            time_limit: 0,
            memory_limit: 0,
            samples: JSON.parse("[{\"input\": \"123 456\", \"output\": \"579\\n\"}, {\"input\": \"1 1\", \"output\": \"2\\n\"}, {\"input\": \"123 324\", \"output\": \"447\\n\"}]"),
        }
    }
    render() {
        const {classes} = this.props
        const aceOptions = {enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true}
        return (
            <div>
                <Paper className={classes.paper}>
                    <p className={classes.problemTitle}>
                        {this.state.problem.title}
                    </p>
                    <Divider />
                    <div className={classes.problemContainer}>
                        <div className={classes.desc}>
                            <div className={classes.descTitle}>
                                Description
                            </div>
                            <div className={classes.descBody}
                                 dangerouslySetInnerHTML={{__html: this.state.problem.description}}
                            />
                        </div>

                        <div className={classes.desc}>
                            <div className={classes.descTitle}>
                                Input
                            </div>
                            <div className={classes.descBody}
                                 dangerouslySetInnerHTML={{__html: this.state.problem.description_input}}
                            />
                        </div>

                        <div className={classes.desc}>
                            <div className={classes.descTitle}>
                                Output
                            </div>
                            <div className={classes.descBody}
                                 dangerouslySetInnerHTML={{__html: this.state.problem.description_output}}
                            />
                        </div>

                        <div className={classes.sampleContainer}>
                            {
                                this.state.problem.samples.map((value, index) => (
                                    <div className={classes.desc}>
                                        <GridCompact container spacing={10}>
                                            <GridCompact item xs={12} sm={6}>
                                                <div className={classes.descTitle}>
                                                    Input #{index + 1}
                                                </div>
                                                <div className={classes.sample}>
                                                    {value.input}
                                                </div>
                                            </GridCompact>
                                            <GridCompact item xs={12} sm={6}>
                                                <div className={classes.descTitle}>
                                                    Output #{index + 1}
                                                </div>
                                                <div className={classes.sample}>
                                                    {value.output}
                                                </div>
                                            </GridCompact>
                                        </GridCompact>
                                    </div>
                                ))
                            }
                        </div>
                        {
                            this.state.problem.hint.length !== 0 &&
                            <div className={classes.desc}>
                                <div className={classes.descTitle}>
                                    Hint
                                </div>
                                <div className={classes.descBody}
                                     dangerouslySetInnerHTML={{__html: this.state.problem.hint}}
                                />
                            </div>
                        }
                        {
                            this.state.problem.source.length !== 0 &&
                            <div className={classes.desc}>
                                <div className={classes.descTitle}>
                                    Source
                                </div>
                                <div className={classes.descBody}
                                     dangerouslySetInnerHTML={{__html: this.state.problem.source}}
                                />
                            </div>
                        }

                    </div>
                </Paper>
                <Paper style={{marginTop: 20}}>
                    <div className={classes.codePager}>
                        <div className={classes.codeHeader}>
                            <GridCompact container>
                                <GridCompact item xs={12}>
                                    <FormControl>
                                        <InputLabel>Language</InputLabel>
                                        <Select value={4}
                                                className={classes.select}>
                                            <MenuItem value={1}>C</MenuItem>
                                            <MenuItem value={2}>C++</MenuItem>
                                            <MenuItem value={3}>Java</MenuItem>
                                            <MenuItem value={4}>Python</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.ftRight}>
                                        <InputLabel>Theme</InputLabel>
                                        <Select value={4} className={classes.select}>
                                            <MenuItem value={1}>monokai</MenuItem>
                                            <MenuItem value={2}>tomorrow</MenuItem>
                                            <MenuItem value={3}>kuroir</MenuItem>
                                            <MenuItem value={4}>twilight</MenuItem>
                                            <MenuItem value={5}>xcode</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridCompact>
                            </GridCompact>
                        </div>
                        <div className={classes.aceContainer}>
                            <AceEditor
                                placeholder={"// Enjoy it !"}
                                mode="c_cpp"
                                theme="tomorrow"
                                editorProps={{ $blockScrolling: true }}
                                width={"100%"}
                                fontSize={15}
                                setOptions={aceOptions}/>
                        </div>
                        <GridCompact container>
                            <GridCompact item xs={12}>
                                <Button className={classes.submitBtn} color="primary" variant="contained">Submit</Button>
                            </GridCompact>
                        </GridCompact>
                    </div>
                </Paper>
            </div>
        );
    }
}



export default withStyles(useStyles)(ProblemDetail)
