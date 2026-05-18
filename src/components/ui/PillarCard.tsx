import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
import { cardSx } from '../../theme/theme';

export interface Pillar {
  title: string;
  description: string;
  enjoyLabel: string;
  enjoy: string[];
  toolsLabel: string;
  tools: string[];
  icon: ReactNode;
}

export default function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <Card sx={cardSx}>
      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
        <Box sx={{ color: 'primary.main', mb: 2 }}>{pillar.icon}</Box>
        <Typography variant="h3" component="h3" gutterBottom sx={{ color: 'text.primary' }}>
          {pillar.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {pillar.description}
        </Typography>
        <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
          {pillar.enjoyLabel}
        </Typography>
        <List dense disablePadding sx={{ mb: 2 }}>
          {pillar.enjoy.map((item) => (
            <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
        <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
          {pillar.toolsLabel}
        </Typography>
        <List dense disablePadding>
          {pillar.tools.map((item) => (
            <ListItem key={item} disableGutters sx={{ py: 0.25 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
