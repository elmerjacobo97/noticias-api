import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const CATEGORIAS = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Negocios' },
    { value: 'entertainment', label: 'Entretenimiento' },
    { value: 'health', label: 'Salud' },
    { value: 'science', label: 'Ciencia' },
    { value: 'sports', label: 'Deportes' },
    { value: 'technology', label: 'Tecnología' },
];

const Formulario = () => {
    const { category, handleChangeCategory } = useNoticias();
    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoría</InputLabel>
                <Select
                    label='Categoría'
                    onChange={handleChangeCategory}
                    value={category}
                >
                    {CATEGORIAS.map((category) => (
                        <MenuItem key={category.value} value={category.value}>
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>

                {/*<Box
                    sx={{
                        marginTop: 2,
                    }}
                >
                    <Button fullWidth variant='contained' color='secondary'>
                        Buscar Noticias
                    </Button>
                </Box>*/}
            </FormControl>
        </form>
    );
};

export default Formulario;
