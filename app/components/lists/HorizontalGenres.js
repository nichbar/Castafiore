import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '~/contexts/theme';
import CustomFlat from '~/components/lists/CustomFlat';
import size from '~/styles/size';
import mainStyles from '~/styles/main';

const HorizontalGenres = ({ genres }) => {
	const navigation = useNavigation();
	const theme = React.useContext(ThemeContext)

	const renderItem = React.useCallback(({ item }) => (
		<Pressable
			style={({ pressed }) => ([mainStyles.opacity({ pressed }), styles.genreBox(theme)])}
			onPress={() => navigation.navigate('Genre', { name: item.value, songCount: item.songCount, albumCount: item.albumCount })}
		>
			<Text numberOfLines={1} style={styles.genreText(theme)}>{item.value}</Text>
		</Pressable>
	), [theme])

	return (
		<CustomFlat
			style={styles.genreList}
			contentContainerStyle={styles.scrollContainer}
			data={genres}
			renderItem={renderItem}
		/>
	)
}

const styles = StyleSheet.create({
	genreList: {
		width: '100%',
	},
	scrollContainer: {
		height: 55 * 2 + 10,
		paddingStart: 20,
		paddingEnd: 20,
		flexDirection: 'column',
		flexWrap: 'wrap',
		columnGap: 10,
		rowGap: 10,
	},
	genreBox: theme => ({
		flex: 1,
		height: 55,
		borderRadius: 3,
		paddingHorizontal: 40,
		backgroundColor: theme.primaryTouch,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	genreText: theme => ({
		color: theme.innerTouch,
		fontSize: size.text.large,
		fontWeight: 'bold',
	}),
})

export default HorizontalGenres;