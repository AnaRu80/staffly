import { ReactNode, useState } from 'react';
import { View } from 'react-native';
import { Accordion } from './Accordion';
import { Divider } from 'react-native-paper';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionListProps {
  data: AccordionItem[];
}

export function AccordionList({ data }: AccordionListProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  return (
    <View>
      {data.map((item, index) => (
        <View key={item.title} >
          <Accordion
            key={item.title}
            title={item.title}
            expanded={activeAccordion === item.title}
            onPress={() =>
              setActiveAccordion(
                activeAccordion === item.title ? null : item.title
              )
            }

          >
            {item.content}
          </Accordion>
          {index < data.length - 1 && (
            <Divider style={{ backgroundColor: "#444748" }} />
          )}
        </View>
      ))
      }
    </View >
  );
}