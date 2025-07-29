import { StyleSheet } from 'react-native';
import size from '~/styles/size';

export default StyleSheet.create({
	cover: {
		width: "100%",
		height: 300,
	},
	title: theme => ({
		color: theme.primaryText,
		fontSize: size.title.medium,
		fontWeight: 'bold',
		margin: 20,
		marginBottom: 0,
		marginTop: 13,
		textAlign: 'left',
	}),
	subTitle: theme => ({
		color: theme.secondaryText,
		fontSize: size.text.large,
		marginStart: 20,
		textAlign: 'left',
	}),
	button: {
		padding: 20,
		justifyContent: 'start',
	},
	headerContainer: {
		flexDirection: 'row',
		width: '100%',
		maxWidth: '100%',
		marginBottom: 30
	},
})