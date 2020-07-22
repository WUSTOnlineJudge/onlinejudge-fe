import React from "react";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardContent,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Typography
} from "@material-ui/core";
import GridCompact from "../components/GridCompact";
import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-python'

import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/theme-twilight'
import 'ace-builds/src-noconflict/theme-xcode'
import "ace-builds/src-noconflict/ext-language_tools"
import Grid from "../components/GridCompact";


const themeMode = ["monokai", "tomorrow", "kuroir", "twilight", "xcode"]


const languageMode: Array<ILanguageMode> = [
    {index: 0, mode: "c_cpp", title: "C", comment: "//"},
    {index: 1, mode: "c_cpp", title: "C++", comment: "//"},
    {index: 2, mode: "java", title: "Java", comment: "//"},
    {index: 3, mode: "python", title: "Python3", comment: "#"}]


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
        minWidth: "80px"
    },
    ftRight: {
        float: "right"
    }
})

interface ILanguageMode {
    index: number,
    mode: string,
    title: string,
    comment: string
}


interface IState {
    problem: IProblem,
    language: ILanguageMode,
    theme: string
}

interface ISample {
    input: string,
    output: string
}

interface IProblem {
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
    samples: Array<ISample>
}


class ProblemDetail extends React.Component<any, IState> {
    readonly state: Readonly<IState> = {
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
        },
        language: languageMode[0],
        theme: "tomorrow"
    }

    onLanguageChange(event: React.ChangeEvent<{ value: unknown }>) {
        const language = languageMode.filter(it => it.index == event.target.value)[0]
        this.setState({
            language
        })
    }

    onThemeChange(event: React.ChangeEvent<{ value: unknown }>) {
        console.log(event.target.value)
        this.setState({
            theme: event.target.value as string
        })
    }

    render() {
        const {classes} = this.props
        const aceOptions = {enableBasicAutocompletion: true, enableLiveAutocompletion: true, enableSnippets: true}
        return (
            <div>
                <GridCompact container spacing={1}>
                    <GridCompact item xs={12} md={12}>
                        <Paper className={classes.paper}>
                            <p className={classes.problemTitle}>
                                {this.state.problem.title}
                            </p>
                            <Divider/>
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
                    </GridCompact>
                </GridCompact>

                <Paper style={{marginTop: 20}}>
                    <div className={classes.codePager}>
                        <div className={classes.codeHeader}>
                            <GridCompact container>
                                <GridCompact item xs={12}>
                                    <FormControl>
                                        <InputLabel>Language</InputLabel>
                                        <Select value={this.state.language.index}
                                                className={classes.select}
                                                onChange={this.onLanguageChange.bind(this)}>
                                            {languageMode.map(it => (
                                                <MenuItem value={it.index}>{it.title}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl className={classes.ftRight}>
                                        <InputLabel>Theme</InputLabel>
                                        <Select
                                            value={this.state.theme}
                                            className={classes.select}
                                            onChange={this.onThemeChange.bind(this)}>
                                            {themeMode.map(it => (
                                                <MenuItem value={it}>{it.charAt(0).toUpperCase() + it.slice(1)}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </GridCompact>
                            </GridCompact>
                        </div>
                        <div className={classes.aceContainer}>
                            <AceEditor
                                placeholder={this.state.language.comment + " Enjoy it !"}
                                mode={this.state.language.mode}
                                theme={this.state.theme}
                                editorProps={{$blockScrolling: true}}
                                width={"100%"}
                                height={"400px"}
                                fontSize={15}
                                setOptions={aceOptions}/>
                        </div>
                        <GridCompact container>
                            <GridCompact item xs={12}>
                                <Button className={classes.submitBtn} color="primary"
                                        variant="contained">Submit</Button>
                            </GridCompact>
                        </GridCompact>
                    </div>
                </Paper>
            </div>
        );
    }
}


export default withStyles(useStyles)(ProblemDetail)
